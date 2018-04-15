import Vue from 'vue';

/*
    This Event bus will be used for pub/sub events that fall out of the scope of our vuex store,
    aka simple communication within two components, notify of configuration loading, ...
 */
window.EventBus = new Vue();
export const EventBus = window.EventBus;
