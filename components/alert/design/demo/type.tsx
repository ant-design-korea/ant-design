import React from 'react';
import { Alert, Flex } from 'antd';

const Demo = () => (
  <Flex gap="large" vertical style={{ maxWidth: 600 }}>
    <Flex gap="middle" vertical>
      <div>성공 메시지</div>
      <Alert
        showIcon
        type="success"
        message="축하합니다! 귀하께서 제출하신 정보가 심사를 통과했습니다. 궁금한 점이 있으시면 고객센터로 문의해주세요."
      />
      <Alert
        showIcon
        type="success"
        message="성공했습니다!"
        description="귀하께서 제출하신 정보가 심사를 통과했습니다. 따라서 진행 상황을 수시로 확인해주시기 바랍니다. 궁금한 점이 있으시면 담당 심사관 또는 온라인 상담원에게 문의해주세요."
      />
    </Flex>
    <Flex gap="middle" vertical>
      <div>정보 메시지</div>
      <Alert
        showIcon
        type="info"
        message="안녕하세요! 전문 버전을 이용해주셔서 감사합니다. 귀하의 필요에 따라 비즈니스 모듈을 추가할 수 있습니다."
      />
      <Alert
        showIcon
        type="info"
        message="도움말 정보"
        description="안녕하세요, 귀하의 좋은 신용을 고려하여 3개월의 제품 회원권을 드리기로 결정했습니다. 회원의 특권 및 활동에 대해 알아보시려면 홈페이지의 회원 전용 구역을 방문해 주시기 바랍니다."
      />
    </Flex>
    <Flex gap="middle" vertical>
      <div>경고 알림</div>
      <Alert
        showIcon
        type="warning"
        message="시스템은 15:00 - 17:00에 업그레이드를 진행합니다. 자료를 신속하게 저장해 주시기 바랍니다!"
      />
      <Alert
        showIcon
        type="warning"
        message="주의해 주세요"
        description="당신이 제출한 정보는 검토에 실패했습니다. 이유는 개인 사서함에서 확인할 수 있으며, 궁금한 점이 있으면 고객 서비스 직원에게 문의해 주세요."
      />
    </Flex>
    <Flex gap="middle" vertical>
      <div>오류 메시지</div>
      <Alert
        showIcon
        type="error"
        message="시스템 오류가 발생했습니다. 나중에 다시 시도해 주세요."
      />
      <Alert
        showIcon
        type="error"
        message="오류가 발생했습니다!"
        description="귀하의 계정 회원 사용 권한은 3일 후에 만료됩니다. 신청 상태를 신속히 확인하시기 바랍니다. 문제가 있을 경우, 심사 담당자에게 문의하십시오."
      />
    </Flex>
  </Flex>
);

export default Demo;
