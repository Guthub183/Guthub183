"""
K. Satya Pranav - Animated SVG Terminal Portrait Customizer
==========================================================

This utility script lets you update the ASCII portrait inside both dark.svg
and light.svg using any image file (JPEG, PNG, etc.).

Usage:
  python update_portrait.py                 (Uses the default avatar at public/99024517.jpeg)
  python update_portrait.py my_photo.jpg    (Uses your custom photo)

Prerequisites:
  pip install Pillow
"""

import os
import sys
from html import escape
from PIL import Image, ImageEnhance, ImageOps

# =====================================================================
# CONFIGURATION PARAMETERS
# Adjust these values to fine-tune the clarity and framing of the face
# =====================================================================
CROP_LEFT = 0.25   # Fraction to crop from left (0.0 to 1.0)
CROP_RIGHT = 0.25  # Fraction to crop from right (0.0 to 1.0)
CROP_TOP = 0.20    # Fraction to crop from top (0.0 to 1.0)
CROP_BOTTOM = 0.30 # Fraction to crop from bottom (0.0 to 1.0)

CONTRAST = 2.0     # Contrast multiplier (>1.0 increases contrast)
SHARPNESS = 2.5    # Sharpness multiplier (>1.0 sharpens edges)
BRIGHTNESS = 1.1   # Brightness multiplier (>1.0 brightens)

# Monochrome terminal font character set (from dark/space to light/dense)
CHAR_SET = " .:-=+*cs#%@"
# =====================================================================

def convert_to_ascii(image_path, width=100, height=53):
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        sys.exit(1)
        
    img = Image.open(image_path)
    img = ImageOps.grayscale(img)
    
    # 1. Apply cropping to focus on the face
    w, h = img.size
    left = int(w * CROP_LEFT)
    top = int(h * CROP_TOP)
    right = int(w * (1 - CROP_RIGHT))
    bottom = int(h * (1 - CROP_BOTTOM))
    img = img.crop((left, top, right, bottom))
    
    # 2. Apply enhancements for clear lines
    img = ImageEnhance.Contrast(img).enhance(CONTRAST)
    img = ImageEnhance.Sharpness(img).enhance(SHARPNESS)
    img = ImageEnhance.Brightness(img).enhance(BRIGHTNESS)
    
    # 3. Resize to SVG panel dimensions
    img = img.resize((width, height), Image.Resampling.LANCZOS)
    
    # 4. Map pixels to character set
    ascii_lines = []
    for y in range(height):
        line = []
        for x in range(width):
            pixel = img.getpixel((x, y))
            idx = int((pixel / 255) * (len(CHAR_SET) - 1))
            line.append(CHAR_SET[idx])
        ascii_lines.append("".join(line))
        
    return "\n".join(ascii_lines)

def inject_to_svg(ascii_portrait, svg_path):
    if not os.path.exists(svg_path):
        print(f"Error: SVG template not found at {svg_path}")
        return False
        
    lines = ascii_portrait.splitlines()
    
    # Format lines to be exactly 100 characters wide
    final_lines = []
    for line in lines:
        line = line.rstrip()
        if len(line) < 100:
            line = line + " " * (100 - len(line))
        elif len(line) > 100:
            line = line[:100]
        final_lines.append(line)
        
    # Coordinates matching the SVG terminal layouts
    start_y = 79.98
    line_height = 7.5471
    start_x = 30
    
    tspans = []
    y = start_y
    for line in final_lines:
        escaped_line = escape(line)
        tspan = f'<tspan x="{start_x}" y="{y:.2f}" xml:space="preserve">{escaped_line}</tspan>'
        tspans.append(tspan)
        y += line_height
        
    new_tspan_block = "\n" + "\n".join(tspans) + "\n"
    
    with open(svg_path, 'r', encoding='utf-8') as f:
        svg_content = f.read()
        
    start_tag = '<text x="30" y="0" class="ascii">'
    end_tag = '</text>'
    
    start_idx = svg_content.find(start_tag)
    if start_idx == -1:
        print(f"Could not find start tag in {svg_path}")
        return False
        
    end_idx = svg_content.find(end_tag, start_idx)
    if end_idx == -1:
        print(f"Could not find end tag in {svg_path}")
        return False
        
    before = svg_content[:start_idx + len(start_tag)]
    after = svg_content[end_idx:]
    
    updated_svg_content = before + new_tspan_block + after
    
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(updated_svg_content)
        
    print(f"Successfully updated: {svg_path}")
    return True

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Check if we should only inject the existing portrait.txt
    only_inject = False
    if len(sys.argv) > 1 and sys.argv[1] == "--only-inject":
        only_inject = True
        
    if only_inject:
        portrait_txt_path = os.path.join(current_dir, "portrait.txt")
        if not os.path.exists(portrait_txt_path):
            print(f"Error: portrait.txt not found at {portrait_txt_path}")
            sys.exit(1)
        with open(portrait_txt_path, 'r', encoding='utf-8') as f:
            ascii_art = f.read()
        print(f"Reading custom ASCII portrait from: {portrait_txt_path}")
    else:
        # Determine input image path
        image_path = os.path.join(current_dir, "public", "99024517.jpeg")
        if len(sys.argv) > 1:
            image_path = os.path.abspath(sys.argv[1])
            
        print(f"Loading image: {image_path}")
        
        # 1. Convert image to ASCII
        ascii_art = convert_to_ascii(image_path)
        
        # Save raw portrait.txt
        portrait_txt_path = os.path.join(current_dir, "portrait.txt")
        with open(portrait_txt_path, 'w', encoding='utf-8') as f:
            f.write(ascii_art)
        print(f"Saved ASCII portrait text to: {portrait_txt_path}")
        
    # 2. Inject into dark.svg and light.svg
    inject_to_svg(ascii_art, os.path.join(current_dir, "dark.svg"))
    inject_to_svg(ascii_art, os.path.join(current_dir, "light.svg"))
    
    print("\nUpdate complete! You can open README.html to review the changes.")
