import 'whatwg-fetch';

const BaseUrl = "http://192.168.1.11:3000/v1/";

const Header = (url, method, body) => {
  return(
    fetch(BaseUrl + url, {
      method: method,
      body: body
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      })
    );
};

export default Header;

