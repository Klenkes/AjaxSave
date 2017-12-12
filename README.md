# AjaxSave beta

This module adds a news button "Apply" which saves the page via ajax when editing in the admin so the page doesn't reload.

- Configurable button text
- So far it seems to work fine for all fields and supports multilanguage.
- There's a message dialog when saving happened with either a success or error.(Styles in AjaxSave.css)

## Requirements

ProcessWire 3+ with namespace

## Known Issues

- In admintheme UiKit the message box appears twice...

## Todo

- A few config options maybe... restrict to certain templates? Additional CSS class for the button?
- In modal edit page the Apply button is lonely on bottom left
- The browser nags you that you made changes to the page and asks. Maybe not that bad...

This module is currently a proof of concept.

Thanks to Apeisa and his great Fredi font-end module, from where some logic is borrowed to save the page via ajax.
Thanks to Philipp 'Soma' Urlich for the original AutoSave based on Apeisas code.