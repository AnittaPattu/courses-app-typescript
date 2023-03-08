export const postData = async (url: string, data: string) => {
  const BASE_URL = "http://localhost:4000";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  };
  const response = fetch(BASE_URL + url, requestOptions);
  const responseData = (await response).json();
  return responseData;
};

export const getData = async (url: string) => {
  const BASE_URL = "http://localhost:4000";
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(BASE_URL + url, requestOptions);
  const responseData = (await response).json();
  return responseData;
};

// export const postData = (url: string, data: string) => {
//   const BASE_URL = "http://localhost:4000/";
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };
//   const response = fetch(BASE_URL + url, requestOptions);
//   (await response).json();
// }

// function service() {
//   const BASEURL = "http://localhost:4000";

//   async function getAllCourses() {
//     const courseresponse = await fetch("http://localhost:4000/courses/all", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await courseresponse.json();
//   }
// }

// export default service;
