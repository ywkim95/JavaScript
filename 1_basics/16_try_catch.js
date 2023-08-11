/**
 * try...catch
 *
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고한다. (catch)
 */
function runner() {
  try {
    console.log("Hello");

    // throw new Error("큰 문제가 생겼습니다.");

    console.log("Code Factory");
  } catch (e) {
    console.log("---catch---");
    console.log(e);
  } finally {
    // finally는 optional이다.
    console.log("---finally---");
  }
}
runner();
