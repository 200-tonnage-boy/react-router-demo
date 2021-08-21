

export default {
  addUser: (user) => {
    const userList =  JSON.parse(localStorage.getItem('cjy-user')) || [];
    userList.push(user);
    localStorage.setItem('cjy-user',JSON.stringify(userList));
  },
  findUser: (id) => {
    const userList =  JSON.parse(localStorage.getItem('cjy-user')) || [];
    return userList.find(item => item.id == id) || {}
  },
  getUserList: () => {
    const userList =  JSON.parse(localStorage.getItem('cjy-user')) || [];
    return userList
  }
}