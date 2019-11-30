const state = {
    appLanguage: "en"
};

const actions = {
    setAppLanguage: ({commit}, context) => {
        commit("setAppLanguage", context);
    }
};

const mutations = {
    setAppLanguage(state, appLanguage) {
        state.appLanguage = appLanguage;
    }
};

export default {
    namespaced: false,
    state,
    actions,
    mutations
}