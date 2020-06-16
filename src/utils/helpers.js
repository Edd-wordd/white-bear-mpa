function checkIsOver(String, num) {
   if (String.length > num) return true;
   else return false;
}

const MAX_CARD_CHARS = 240;
export { checkIsOver, MAX_CARD_CHARS };
