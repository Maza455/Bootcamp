const ageHistory = JSON.parse(localStorage.getItem("ageHistory")) || [];

		// Display the age history on the page
		const ageHistoryList = document.getElementById("age-history");
		for (const age of ageHistory) {
			const listItem = document.createElement("li");
			listItem.innerHTML = `Age: ${age.age}, Date: ${age.date}`;
			ageHistoryList.appendChild(listItem);
		}

		function calculateAge() {
			const day = parseInt(document.getElementById("day").value);
			const month = parseInt(document.getElementById("month").value);
			const year = parseInt(document.getElementById("year").value);

			const today = new Date();
			const birthDate = new Date(year, month - 1, day);

			let age = today.getFullYear() - birthDate.getFullYear();
			const monthDiff = today.getMonth() - birthDate.getMonth();
			if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}

			// Store the age in the age history array
			const date = new Date().toLocaleString();
			const newAge = { age: age, date: date };
			ageHistory.push(newAge);

			// Save the updated age history to local storage
			localStorage.setItem("ageHistory", JSON.stringify(ageHistory));

			document.getElementById("age").innerHTML = age;

			// Add the new age to the age history list
			const listItem = document.createElement("li");
			listItem.innerHTML = `Age: ${newAge.age}, Date: ${newAge.date}`;
			ageHistoryList.appendChild(listItem);
		}