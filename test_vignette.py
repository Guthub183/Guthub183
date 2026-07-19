import os
from PIL import Image, ImageEnhance, ImageOps, ImageDraw

image_path = "public/99024517.jpeg"
img = Image.open(image_path)
img_gray = ImageOps.grayscale(img)

# Let's inspect the original image size
w, h = img_gray.size

# We want the portrait to stand out, and the background to be quiet (mostly '.')
# Since '.' is the darkest character, we want the background to be dark.
# Let's see if we can create a mask that darkens the background, keeping the subject in the center bright.
# Let's try a radial gradient mask.
mask = Image.new("L", (w, h), 0)
draw = ImageDraw.Draw(mask)

# Draw a filled white ellipse in the center (subject area)
# Let's make it cover the center area where the person is.
# Typically, the person is in the center. Let's make it an ellipse from (w*0.15, h*0.1) to (w*0.85, h*0.95)
draw.ellipse([int(w*0.12), int(h*0.05), int(w*0.88), int(h*0.98)], fill=255)

# Soften the mask by blurring it
from PIL import ImageFilter
mask = mask.filter(ImageFilter.GaussianBlur(120))

# Now, we multiply the image with this mask to darken the background
# Let's try combining the original grayscale image and the masked (darkened) image
darkened = img_gray.point(lambda p: p * 0.15) # darken background significantly (15% brightness)
result = Image.composite(img_gray, darkened, mask)

# Enhance the result
result_enhanced = ImageEnhance.Contrast(result).enhance(2.2)
result_enhanced = ImageEnhance.Sharpness(result_enhanced).enhance(2.5)
result_enhanced = ImageEnhance.Brightness(result_enhanced).enhance(1.1)

# Resize
width = 100
height = 53
img_resized = result_enhanced.resize((width, height), Image.Resampling.LANCZOS)

char_set = ".:-=+*cs#%@"
lines = []
for y in range(height):
    line = []
    for x in range(width):
        pixel = img_resized.getpixel((x, y))
        idx = int((pixel / 255) * (len(char_set) - 1))
        line.append(char_set[idx])
    lines.append("".join(line))

with open("test_vignette.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print("Vignette test complete!")
