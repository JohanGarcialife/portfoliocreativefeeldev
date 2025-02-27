export function setToken(token) {
    localStorage.setItem("token", token);
  }
  
  export function getToken() {
    return localStorage.getItem("token");
  }
  
  export function getTokenGoole() {
    return localStorage.getItem('sb-tmtuxumilpuoathgxaxn-auth-token');
  }

  export function removeToken() {
    localStorage.removeItem("token");
    localStorage.removeItem( "sb-tmtuxumilpuoathgxaxn-auth-token");
  }