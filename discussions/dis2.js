const BIN_URL="https://api.jsonbin.io/v3/b/68cd93a0ae596e708ff42618"
const API_KEY="$2a$10$3gxEPsug5zUAJ8hAkJjMG.uyUbObEnSEgiOofmzSI5XUOw4oZEI3G"
const output=document.getElementById("output");
async function getData() {
    const res = await fetch(BIN_URL,
        {headers: {"X-Master-Key": API_KEY} }
    );
    const data = await res.json();
    const singleAffiliate=data.record.affiliates.map(
        a =>

                `
                    <li>
                        ${a.fName} ${a.lName} (${a.isStudent ? "Student" : "Not Student"})
                    </li>
                `
    );
    output.innerHTML+=singleAffiliate;
}
