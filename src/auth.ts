import { ref } from "vue";
import router from "./Router";

export const role = ref<string>()
export const isAuth = ref<boolean>();
export const guid = ref<string>();
export function saveToken(token: string) {
  window.localStorage.setItem('access_token', token);
}
export function getToken(): string {
  return window.localStorage.getItem('access_token');
}
export function logout(){
  window.localStorage.removeItem('access_token');
  isAuth.value = false;
}
function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
export function redirectToSignIn(){
  router.replace('register');
}
export function redirectToPages(token: string){
  let jsontoken = parseJwt(token);
  role.value = token["role"];
  guid.value = token["id"];
  isAuth.value = true;
  if (role.value === 'ROLE_PARTNER')
    router.replace('volunteers');
  else if (role.value === 'ROLE_VOLUNTEER')
    router.replace('partners');
  else
    router.replace('adminPanel');
}
