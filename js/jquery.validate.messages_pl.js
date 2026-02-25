/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PL (Polish; język polski, polszczyzna)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Pole wymagane.",
		remote: "Proszę wypełnić to pola.",
		email: "Adres email niepoprawny.",
		url: "URL niepoprawny.",
		date: "Data niepoprawna.",
		dateISO: "Data (ISO)  niepoprawna.",
		number: "Niepoprawna liczba.",
		digits: "Wymagane same cyfry.",
		creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
		equalTo: "Hasła różnią się.",
		accept: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
		maxlength: $.validator.format("Podaj nie więcej niż {0} znaków."),
		minlength: $.validator.format("Podaj przynajmniej {0} znaków."),
		rangelength: $.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
		range: $.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
		max: $.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
		min: $.validator.format("Proszę o podanie wartości większej bądź równej {0}.")
	});
}(jQuery));