"use strict";

const poll = {
	question: "What is your favorite programming language ?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		const answer = +prompt(
			`${this.question} \n${this.options.join("\n")}\n(Write option Number) `
		);
		console.log(answer);

		// Register
		typeof answer === "number" &&
			answer < this.answers.length &&
			this.answers[answer]++;

		console.log(this.answers);

		this.displayResult();
		this.displayResult("string");
	},
	displayResult(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			// Poll results are 13, 2, 4, 1
			console.log(`Poll results are ${this.answers.join(", ")}`);
		}
	},
};

// poll.registerNewAnswer();

document
	.querySelector(".poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
