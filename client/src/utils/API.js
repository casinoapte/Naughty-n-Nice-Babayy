import axios from "axios";

export default {

  //////////////////////////////
  // Group Database API //
  //////////////////////////////

  // Posting new group to Database - DONE //

  createGroup: function (groupData) {
    return axios.post("/api/groups/", groupData);
  },

  // Finding group by Name and Password - DONE //

  findGroup: function (name, password) {
    return axios.get("/api/groups/" + name + "/" + password)
      .then(res => {
        return res
      })
  },

  // Find group by ID - DONE //

  findGroup2: function (id) {
    return axios.get("/api/groups/" + id)
      .then(res => {
        return res
      })
  },

  // Adding members to the membersName array in Group Database - DONE //

  addMembers: function (memberName, id) {
    return axios.put("/api/groups/" + id, memberName)
  },

  // Adding Description to the Group Database - DONE //

  addDescription: function (description, id) {
    return axios.put("/api/groups/description/" + id, description)
  },

  // Deleting Members from DB Using Button //



  deleteMember: function (groupId, memberId) {
    return axios.put("/api/groups/delete/" + groupId, { memberId });
  },




  // Finding members to use as props for display component - ??? //

  findUser: function (name, id) {
    return axios.get("/api/groups/user/" + name + "/" + id)
      .then(dbGroup => {
        return dbGroup
      })
  }





}