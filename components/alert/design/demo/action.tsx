import React from 'react';
import { Alert, Flex, Typography } from 'antd';

const Demo = () => {
  const [expandA, setExpandA] = React.useState(false);
  const [expandB, setExpandB] = React.useState(true);

  return (
    <Flex gap="large" vertical style={{ maxWidth: 600 }}>
      <Flex gap="middle" vertical>
        <div>알림 닫기</div>
        <Alert
          showIcon
          closable
          message="안녕하세요! 전문판 사용을 환영합니다. 필요에 따라 비즈니스 모듈을 추가할 수 있습니다."
        />
        <Alert
          showIcon
          closable
          message="도움 정보"
          description="안녕하세요, 귀하의 좋은 신용을 고려하여 3개월 제품 회원권을 드리기로 결정했습니다. 회원 특권 및 활동에 대한 자세한 내용은 홈페이지 회원 구역에서 확인하시기 바랍니다."
        />
      </Flex>
      <Flex gap="middle" vertical>
        <div>알림 펼치기/접기</div>
        <Alert
          showIcon
          closable
          message={
            <div>
              <Typography.Paragraph ellipsis={!expandA && { rows: 2 }} style={{ marginBottom: 8 }}>
                알림 정보가 2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림
                정보가 2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림 정보가
                2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림 정보가 2줄을
                초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다.
              </Typography.Paragraph>
              <Typography.Link onClick={() => setExpandA((prev) => !prev)}>
                {expandA ? '접기' : '확장'}
              </Typography.Link>
            </div>
          }
          style={{ alignItems: 'baseline' }}
        />
        <Alert
          showIcon
          closable
          message={
            <div>
              <Typography.Paragraph ellipsis={!expandB && { rows: 2 }} style={{ marginBottom: 8 }}>
                알림 정보가 2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림
                정보가 2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림 정보가
                2줄을 초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다. 알림 정보가 2줄을
                초과할 경우, 일부 정보를 접어서 공간을 줄일 수 있습니다.
              </Typography.Paragraph>
              <Typography.Link onClick={() => setExpandB((prev) => !prev)}>
                {expandB ? '접기' : '확장'}
              </Typography.Link>
            </div>
          }
          style={{ alignItems: 'baseline' }}
        />
      </Flex>
      <Flex gap="middle" vertical>
        <div>다른 작업 수행</div>
        <Alert
          showIcon
          closable
          message="버튼 배치에 대한 명확한 설명과 추가 정보"
          action={<Typography.Link>관련 작업</Typography.Link>}
        />
        <Alert
          showIcon
          closable
          message={
            <div>
              <Typography.Paragraph style={{ marginBottom: 8 }}>
                알림 정보가 한 줄을 초과할 경우, 버튼은 위에서 아래로의 시각적 흐름에 따라 정보 영역
                아래에 배치되어 더 원활하게 볼 수 있습니다. 즉, 먼저 알림 정보를 읽고, 그에 따라
                어떤 작업을 수행할지를 판단할 수 있습니다.
              </Typography.Paragraph>
              <Flex gap={8}>
                <Typography.Link>관련 작업 1</Typography.Link>
                <Typography.Link>관련 작업 2</Typography.Link>
              </Flex>
            </div>
          }
          style={{ alignItems: 'baseline' }}
        />
        <Alert
          showIcon
          closable
          message="알림 제목"
          description={
            <div>
              <Typography.Paragraph style={{ marginBottom: 8 }}>
                알림 정보가 한 줄을 초과할 경우, 버튼은 위에서 아래로의 시각적 흐름에 따라 정보 영역
                아래에 배치되어 더 원활하게 볼 수 있습니다. 즉, 먼저 알림 정보를 읽고, 그에 따라
                어떤 작업을 수행할지를 판단할 수 있습니다.
              </Typography.Paragraph>
              <Flex gap={8}>
                <Typography.Link>관련 작업 1</Typography.Link>
                <Typography.Link>관련 작업 2</Typography.Link>
              </Flex>
            </div>
          }
        />
        <Typography.Paragraph type="secondary">
          Link Button을 통일하여 사용하는 것이 좋습니다. 이는 클릭 가능성을 명확히 하고 전체적인
          시각적 조화를 이루는 데 도움이 됩니다. 알림 정보가 한 줄을 초과하지 않을 때는 버튼을
          정보의 오른쪽에 배치하고, 알림 정보가 한 줄을 초과할 경우 버튼을 정보 영역 아래에
          배치합니다. 이렇게 하면 사용자의 탐색 흐름을 일관되게 유지할 수 있습니다. 즉, 먼저 알림
          정보를 읽고 그에 따라 어떤 작업을 수행할지를 판단할 수 있습니다.
        </Typography.Paragraph>
      </Flex>
    </Flex>
  );
};

export default Demo;
