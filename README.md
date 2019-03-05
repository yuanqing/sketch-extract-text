# sketch-extract-text

> A Sketch plugin to extract text from layers that match a regular expression

- Useful for extracting annotations from UX specifications

## Usage

<kbd>⌘</kbd> <kbd>Ctrl</kbd> <kbd>Option</kbd> <kbd>E</kbd>

- Copies to the clipboard the text in Layers that match a regular expression
- Can be configured to match either the Layer name or the Layer content against the regular expression
- Operates on text Layers in the selection, or on all text Layers on the current page if the selection is empty

Settings | Default
:--|:--
Regular expression | `^Remark`
Match Layer name or Layer content | Match Layer content

## Installation

1. [Download and unzip the latest release.](https://github.com/yuanqing/sketch-extract-text/releases)
2. Double-click `Extract Text.sketchplugin` to install.

## License

[MIT](LICENSE.md)
