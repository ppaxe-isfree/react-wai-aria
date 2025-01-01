
// @name addRandomKey
// @desc 돔 아이디에 기입할 랜덤 키를 생성한다.
// @example addRandomKey();
// @return result<String) : 'TEST_e80bd3'
const addRandomKey = () => {
    const charKey = Math.random().toString(16).substr(2, 6);

    return charKey;
}

export default addRandomKey;