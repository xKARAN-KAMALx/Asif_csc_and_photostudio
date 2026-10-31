# ASIF Website

Static, GitHub Pages-ready multi-page website for:
- ASIF Jan Seva Kendra
- ASIF Photo Studio & Videography

## Files
- `index.html` - homepage
- `jan-seva.html` - Jan Seva services and enquiry form
- `photo-studio.html` - studio services, portfolio placeholders and photographer booking form
- `about-website.html` - developer information
- `assets/css/style.css` - responsive styles
- `assets/js/main.js` - theme, language and navigation
- `assets/js/forms.js` - WhatsApp enquiry forms

## Publish on GitHub Pages
1. Extract the ZIP.
2. Upload all files and folders to the root of your GitHub repository.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

## Important configuration
The business WhatsApp number used by both forms is `7505656213` (international format `917505656213`), taken from the supplied promotional poster. To change it, edit `BUSINESS_WHATSAPP` in `assets/js/forms.js`.

The business address, opening hours, Google Maps link, owner names and developer details are included from the information supplied.

## Notes
- Forms open WhatsApp with a pre-filled message. The visitor must press **Send** in WhatsApp.
- This static site does not store submissions in a database.
- No service prices are shown yet.
- Replace the portfolio placeholder blocks with real studio photos when available.
- Verify the WhatsApp number and Google Maps pin before publishing.
- Jan Seva wording describes application assistance; it does not claim government ownership or guarantee approval.
