TARGET=wikilayout/wikilayout.js

all:
	echo "var css=\`" > $(TARGET)
	cat style.css >> $(TARGET)
	echo "\`" >> $(TARGET)
	cat ext.js >> $(TARGET)
	cd wikilayout && zip -r -FS ../wikilayout.zip *


clean:
	rm -v $(TARGET) wikilayout.zip

