// numeric enum
enum UserRequest {
  ReadData,
  // ReadData = 2,
  SaveData,
  UpdateData,
}

console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);

// string enum
enum UserRequest2 {
  ReadData = 'READ_DATA',
  //ReadData = 2,
  SaveData = 'SAVE_DATA',
  UpdateData = 'UPDATE_DATA',
}

console.log(UserRequest2);
console.log(UserRequest2.ReadData);
console.log(UserRequest2.SaveData);
console.log(UserRequest2['UpdateData']);

// Heterogeneous enum
enum User {
  id = 101,
  name = 'anisul',
}
console.log(User);