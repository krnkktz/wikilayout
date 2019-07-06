SOURCE=css/ js/ icons/ manifest.json
BUILD=wikilayout

all: wikilayout.zip

$(BUILD):
	@mkdir -p $(BUILD)

wikilayout.zip: $(BUILD)
	@cp -r $(SOURCE) $(BUILD)
	@cd wikilayout && zip -r -FS ../wikilayout.zip *
	@rm -rf $(BUILD)

check: wikilayout.zip
	@jshint js/*
	@addons-linter wikilayout.zip


clean:
	@rm -vf wikilayout.zip

run:
	@web-ext run
