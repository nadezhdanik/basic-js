const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase().repeat(Math.ceil(message.length / key.length));

    let result = "";
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      let curentIndex = this.alphabet.indexOf(message[i]);
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
      } else {
        curentIndex += this.alphabet.indexOf(key[count]);
        result += this.alphabet[curentIndex];
        count++;
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key
      .toUpperCase()
      .repeat(Math.ceil(encryptedMessage.length / key.length));

    let result = "";
    let count = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let curentIndex = this.alphabet.lastIndexOf(encryptedMessage[i]);
      if (!this.alphabet.includes(encryptedMessage[i])) {
        result += encryptedMessage[i];
      } else {
        curentIndex -= this.alphabet.indexOf(key[count]);
        result += this.alphabet[curentIndex];
        count++;
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
