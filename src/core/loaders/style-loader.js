import { store } from '../store/index';

const styleLoader = new Promise(resolve => {
    window.EventBus.$on('config:renderer', () => {
        let template = store.state.core.config.renderer.template;
        require(`../../components/pages/templates/${template}.scss`); //eslint-disable-line no-undef
    });

    // Resolve the loader.
    resolve();
});

export default styleLoader;
