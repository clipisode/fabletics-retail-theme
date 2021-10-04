import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};
export const siteData: any = {
  customCssKey: "styles.css",
  customJsKey: "theme.js",
  meta: {
    // values: TOPIC_TITLE
    title: "Send Fabletics a video",
    description: "Send a video (no app needed) for this Fabletics location",
  },
  introScreen: {
    // values: SOCIAL_NETWORK, BROWSER_NAME, INVITATION_DISPLAY_NAME, URL_TAG, EXTRA_TERMS, BRAND_SLUG, TERMS_SLUG, TERMS_NAME, BRAND_NAME
    recordButtonLabel: "Record a video now",
    uploadLinkLabel: `<p class="text-center">Or <span class="text-brand-primary-light underline">upload a video</span>. It's easy. There's nothing to install.</p>`,
    // Or upload a video.
    readyDescription: `
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Hang on</h1>
      <p class="text-left text-gray-700 text-sm py-3">The SOCIAL_NETWORK browser doesn’t support direct camera uploads on Android.</p>
      <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
      <p class="text-left text-gray-700 text-sm py-3">Just tap the three dots menu and choose <span class="whitespace-nowrap">“Open in BROWSER_NAME”</span> to send your video question to <span class="whitespace-nowrap">INVITATION_DISPLAY_NAME</span>.</p>
    `,
    termsMarkup: `By replying to INVITATION_DISPLAY_NAME, you agree to our <span class="whitespace-nowrap"><a href="/terms">Terms</a> and <a href="/privacy">Privacy</a></span>EXTRA_TERMS.`,
    extraTerms: ` plus <a href="/terms/BRAND_SLUG/TERMS_SLUG">TERMS_NAME</a>`,
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, URL_TAG, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://fabletics.com">
              <img src="THEME_FILE_ROOT/icon-black-small.png" class="h-12" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-32 md:max-h-48 overflow-hidden">Send us a video.<br />Tell us why you love our leggings!</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open it on your phone and send us a video. <span class="whitespace-nowrap">It's easy.</span> There's nothing <span class="whitespace-nowrap">to install.</span></p>
        </div>
      </div>
    `,
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    saveButtonLabel: "Save my video",
    nameScreenHeader: `
      <div class="my-2 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/icon-black-small.png" class="h-16" />
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME, URL_TAG <- needs /success?tag=FOO
    markup: `
      <div class="flex flex-grow flex-col items-center justify-between">
        <div>
          <div>
            <a href="https://fabletics.com">
              <img src="THEME_FILE_ROOT/logo-small.png" style="width: 175px; margin: 80px auto;" />
            </a>
          </div>
          <p class="mt-12 my-12 mx-3 text-center">Thanks for sending us your video!</p>
          <p class="mt-12 my-12 mx-3 text-center">Be sure to follow <a href="https://www.instagram.com/fabletics/">@Fabletics</a> on Instagram to celebrate <span class="whitespace-nowrap">#LeggingDay.</span></p>
        </div>
      </div>
    `,
  },
};
