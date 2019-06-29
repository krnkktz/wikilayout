TARGET=wikilayout/wikilayout.js

all:
	echo "var css=\`" > $(TARGET)
	cat style.css >> $(TARGET)
	echo "\`" >> $(TARGET)
	cat ext.js >> $(TARGET)

clean:
	rm -v $(TARGET)

