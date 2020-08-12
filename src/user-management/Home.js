import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  inputRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyword: "",
      action: "ADD"
    };
  }

  /**
   * Tìm vị trí
   */
  timViTri = id => {
    return this.state.userList.findIndex(user => user.id === id);
  };

  /**
   * Delete User
   */
  handleDelete = user => {
    /**
     * 0. Tìm vị trí
     * 1. Xoa mảng splice(index, 1)
     */
    let { userList } = { ...this.state };
    let index = this.timViTri(user.id);
    if (index !== -1) {
      userList.splice(index, 1);
    }

    this.setState({
      userList
    });
  };

  /**
   * Submit (Thêm/ Cập nhật)
   */
  handleSubmit = user => {
    /**
     * 0. Copy lại mảng userList từ state
     * 1. Thêm user vào mảng mới
     * 2. setState
     */

    if (user.id) {
      //Update
      /**
       * 0. Tao mảng mới userList copy từ mảng state.userList
       * 1. Tìm vị trí
       * 2. Nếu vitri !== -1 => userList[viTri] = user
       * 3. Cập nhật state
       */
      let userList = [...this.state.userList];
      let index = this.timViTri(user.id);
      if (index !== -1) {
        userList[index] = user;

        this.setState({
          userList,
          userEdit: user
        });
      }
    } else {
      //Add
      const userAdd = { ...user };

      userAdd.id = Math.random();
      let userList = [...this.state.userList, userAdd];

      this.setState({
        userList
      });
    }
  };

  handleGetUserEdit = (user, action) => {
    this.setState({
      userEdit: user,
      action
    });
  };

  handleGetKeyWord = keyword => {
    this.setState({
      keyword
    });
  };

  render() {
    let { userList, keyword } = { ...this.state };

    /**
     * Filter
     */
    userList = userList.filter(user => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null
              });
              this.inputRef.current.resetForm();
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          deleteUser={this.handleDelete}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal
          submit={this.handleSubmit}
          userEdit={this.state.userEdit}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default Home;
