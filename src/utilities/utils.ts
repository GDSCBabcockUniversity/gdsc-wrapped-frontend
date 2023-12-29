export function formatPhoneNumber(phoneNumber: string): string {
  console.log("number is ", phoneNumber);
  phoneNumber = phoneNumber.replaceAll(" ", "");

  if (phoneNumber.length == 10) {
    phoneNumber = "+234" + phoneNumber;
  }

  if (phoneNumber.length == 11) {
    phoneNumber = "+234" + phoneNumber.substring(1);
  }

  const firstPart = phoneNumber.substring(0, 4);
  const mainPart = phoneNumber.substring(4, 13);
  const remainingPart = phoneNumber.substring(13);
  const formattedMainPart = mainPart.match(/.{1,3}/g)?.join(" ");

  return firstPart + " " + formattedMainPart + remainingPart;
}
