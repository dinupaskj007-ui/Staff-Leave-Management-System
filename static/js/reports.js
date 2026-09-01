document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");

    const clearButton =
        document.getElementById("clearButton");

    const table =
        document.getElementById("reportTable");

    const rows =
        table.querySelectorAll("tbody tr");

    const staffCount =
        document.getElementById("staffCount");


    function searchStaff() {

        const searchValue =
            searchInput.value
                .trim()
                .toLowerCase();

        let visibleCount = 0;


        rows.forEach(function (row) {

            const username =
                row.cells[1]?.textContent
                    .toLowerCase();

            const email =
                row.cells[2]?.textContent
                    .toLowerCase();


            if (
                username.includes(searchValue) ||
                email.includes(searchValue)
            ) {

                row.style.display = "";

                visibleCount++;

            } else {

                row.style.display = "none";

            }

        });


        staffCount.textContent = visibleCount;

    }


    /* Search button */

    searchButton.addEventListener(
        "click",
        searchStaff
    );


    /* Search while typing */

    searchInput.addEventListener(
        "keyup",
        function (event) {

            if (event.key === "Enter") {

                searchStaff();

            }

        }
    );


    /* Clear */

    clearButton.addEventListener(
        "click",
        function () {

            searchInput.value = "";

            rows.forEach(function (row) {

                row.style.display = "";

            });

            staffCount.textContent = rows.length;

        }
    );

});