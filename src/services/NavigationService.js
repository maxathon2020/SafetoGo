import { CommonActions } from '@react-navigation/native';

let navigator;

function getRef() {
  return navigator;
}

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
}

function secureNavigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: 'SecurityPasswordVerify',
      params: {
        callback: (success) => {
          if (success) {
            navigator.dispatch(
              CommonActions.navigate({
                name: routeName,
                params,
              })
            );
          }
        }
      },
    })
  );
}

function pinNavigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: 'PINCodeVerify',
      params: {
        callback: (success) => {
          if (success) {
            navigator.dispatch(
              CommonActions.navigate({
                name: routeName,
                params,
              })
            );
          }
        }
      },
    })
  );
}

function resetNavigate(routeNames, params) {
  try {
    let resetActions;
    if (Array.isArray(routeNames)) {
      let routes = []
      routeNames.forEach(name => routes.push({ name, params }))
      resetActions = CommonActions.reset({
        index: routes.length - 1,
        actions: routes,
      })
    } else {
      resetActions = CommonActions.reset({
        index: 0,
        routes: [
          { name: routeNames, params }
        ],
      })
    }
    navigator?.dispatch(resetActions)
  } catch (e) {
    // log.error(e)
    console.log(e)
    // console.log('%cRemote navigation failed', global.logColor.failure, e)
  }
}

function getNavRef() {
  return navigator
}

function getCurrentScreen() {
  try {
    return navigator.getCurrentRoute()?.name;
  } catch (e) {
    // console.log('%cUnable to get routeName', global.logColor.failure, e)
    return ''
  }
}

function canGoBack() {
  return navigator?.canGoBack();
}

// add other navigation functions that you need and export them

export default {
  pinNavigate,
  secureNavigate,
  navigate,
  resetNavigate,
  setTopLevelNavigator,
  getRef,
  getCurrentScreen,
  canGoBack
};
