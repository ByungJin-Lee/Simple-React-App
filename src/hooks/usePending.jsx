import { useEffect, useState } from "react";

/**
 * @param {()=>Promise} requestPromiseFn
 * @returns
 */
export default function usePending(requestPromiseFn, dependencyValue = 0) {
  // useState는 Component에 변수 공간을 만드는 것과 같다. (이 공간에 등록된 값이 바뀌는 경우, 자동으로 감지되어 컴포넌트를 업데이트 한다.[repaint, update])

  // 데이터 로딩 상태
  const [pending, setPending] = useState(true);
  // 데이터 로딩이 완료된 경우 이 곳에 데이터 가져옴.
  const [data, setData] = useState();
  // Error 가 존재하는 경우 에러 반환
  const [error, setError] = useState();

  // React 생명 주기에 따라, 컴포넌트(Element)가 처음 생성됬을 때 실행
  useEffect(() => {
    if (requestPromiseFn) {
      requestPromiseFn()
        .then(setData)
        .catch(setError)
        .finally(() => setPending(false)); // 오류가 떠도, 로딩 상태는 종료
    }
  }, [dependencyValue, requestPromiseFn]); // [] 의존성 배열, 만약 의존성 배열 안의 data가 변경될 경우 다시 함수 호출

  return { pending, data, error };
}
