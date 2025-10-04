@echo off
echo Copying blog images to public folder...

mkdir "public\assets" 2>nul
mkdir "public\assets\blog" 2>nul

xcopy "src\assets\blog\*.*" "public\assets\blog\" /Y /I
copy "src\assets\antiparos-paros-rent-jeep-car-rentals.webp" "public\assets\" /Y

echo Done! Blog images copied successfully.
pause
