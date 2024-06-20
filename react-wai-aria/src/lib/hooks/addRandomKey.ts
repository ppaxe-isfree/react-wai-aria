
// @name addRandomKey
// @desc 객체 아이디에 기입할 랜덤 키를 생성한다.
// @example addRandomKey('TEST');
// @return result<String) : 'TEST_e80bd3'
const addRandomKey = (key) => {
    const charKey = Math.random().toString(16).substr(2, 6),
          result = `${key}_${charKey}`;

    return result;
}

export default addRandomKey;