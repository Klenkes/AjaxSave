# AjaxSave(beta) for CMF/CMS ProcessWire

Don't get me wrong, I love ProcessWire, but I never understood why there is noch APPLY button, to save your work without interruption. Almost all other CMSses have those.

This module adds a new button "Apply" which saves the page via ajax when editing in the admin so the page doesn't have to reload, and you stay where you are in tge page.
With the regular Save button you have to navigate back to your place of work, which can be annoying with a huge amount of fields.

- Configurable button text
- So far it seems to work fine for all fields and supports multilanguage.
- There's a message dialog when saving happened with either a success or error.(Styles in AjaxSave.css)

## Requirements

ProcessWire 3+ with namespace (but should work on PW 2+ too)

## Known Issues

- In admintheme UiKit the message box appears twice...

## Todo

- A few config options maybe... restrict to certain templates? Additional CSS class for the button?
- In modal edit page the Apply button is lonely on bottom left
- The browser nags you that you made changes to the page and asks if you want to leave the page without saving. ProcessWire has to made aware of the pagesave somehow and use resetTrackChanges somehow... but how?

This module is currently a proof of concept. Although in use in many of my websites for years.

Thanks to Apeisa and his great Fredi font-end module, from where some logic is borrowed to save the page via ajax.
Thanks to Philipp 'Soma' Urlich for the original AutoSave based on Apeisas code.

## 0.1.3
- Removed useless generation of second button
- Removed more leftover code
- Added a default value for button text
