import os
from PIL import Image, ImageEnhance, ImageOps

# The original ASCII art lines from step 1 (lines 1 to 5)
original_head = [
    "                                               ...::-=+++========-::.                               ",
    "                                     .:--==++**cs###%%%%%%%%%%%%@%%c+-...                           ",
    "                                  .--+*css#%%%%@@@@@@@@@@@@@@@@@@@@%#s*c+++-.                       ",
    "                                .:-==*cs##%@@@@%%%%%%%%%%%%%%%%@@%%@%%%%#%#s+.                      ",
    " ..                            .-==++*cs#%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%*.    .                 "
]

crop_left = 0.25
crop_right = 0.25
crop_top = 0.20
crop_bottom = 0.30
char_set = " .:-=+*cs#%@"
width = 100
height = 53

def test_image(image_path):
    try:
        img = Image.open(image_path)
        img = ImageOps.grayscale(img)
        w, h = img.size
        left = int(w * crop_left)
        top = int(h * crop_top)
        right = int(w * (1 - crop_right))
        bottom = int(h * (1 - crop_bottom))
        img = img.crop((left, top, right, bottom))
        img = ImageEnhance.Contrast(img).enhance(2.0)
        img = ImageEnhance.Sharpness(img).enhance(2.5)
        img = ImageEnhance.Brightness(img).enhance(1.1)
        img = img.resize((width, height), Image.Resampling.LANCZOS)
        
        match = True
        for y in range(len(original_head)):
            line = []
            for x in range(width):
                pixel = img.getpixel((x, y))
                idx = int((pixel / 255) * (len(char_set) - 1))
                line.append(char_set[idx])
            generated_line = "".join(line)
            if generated_line.strip() != original_head[y].strip():
                match = False
                break
        return match
    except Exception as e:
        return False

candidates = [
    r"C:\Users\ksaty\Downloads\Compressed\mithun50-main\mithun50-main\public\99024517.jpeg",
    r"C:\Users\ksaty\OneDrive\Documents\WhatsApp Image 2026-07-01 at 8.29.23 PM.jpeg",
    r"C:\Users\ksaty\Downloads\Compressed\ascii-profile-kit-main\ascii-profile-kit-main\source-photo.jpg",
    r"C:\Users\ksaty\Downloads\Compressed\ascii-profile-kit-main\ascii-profile-kit-main\source-prepped-new.png",
    r"C:\Users\ksaty\Downloads\Compressed\ascii-profile-kit-main\ascii-profile-kit-main\source-prepped.png"
]

found = False
for c in candidates:
    if os.path.exists(c):
        res = test_image(c)
        print(f"Testing {c}: Match={res}")
        if res:
            found = True
            print(f"SUCCESS! Found original candidate: {c}")
            # Copy to public/99024517.jpeg
            import shutil
            shutil.copy(c, "public/99024517.jpeg")
            print("Successfully copied to public/99024517.jpeg")
            break

if not found:
    print("Could not find a matching candidate image.")
