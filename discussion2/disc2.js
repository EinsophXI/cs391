const BIN_URL = "https://api.jsonbin.io/v3/b/68cc75d0d0ea881f408280fa";
const API_KEY = "$2a$10$8Y0P.vxkcOXN./m1b41O5uNjd.nRUjRNo0CGqIF5sTIHBsjsFn8uy";
const output = document.getElementById("output");
async function getData() {
  const res = await fetch(BIN_URL,
    { headers: { "X-Master-Key": API_KEY } }
  );
  const data = await res.json();
  const singleUser = data.record.users.map(
    a =>
      `
        <li>
          ${a.fName} ${a.lname} (${a.isStudent ? "Student" : "Not Student"})
        </li>
      `
  );
  output.innerHTML += singleUser;
};