const VIEWPORT = {
    MOBILE: {
        WIDTH: 1264 // Set up by Vuetify.
    }
};

const viewportService = {
    isMobileViewport() {
        return window.innerWidth < VIEWPORT.MOBILE.WIDTH;
    }
};

export { viewportService };
