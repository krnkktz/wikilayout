SOURCE=css/ js/ icons/ manifest.json
BUILD=wikilayout

all:
	@mkdir -pv $(BUILD)
	@cp -rv $(SOURCE) $(BUILD)
	@cd wikilayout && zip -r -FS ../wikilayout.zip *
	@rm -rfv $(BUILD)

check:
	@jshint js/*
	@addons-linter wikilayout.zip


clean:
	@rm -vf wikilayout.zip

run:
	@web-ext run
