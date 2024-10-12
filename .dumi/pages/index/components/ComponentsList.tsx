import React, { useContext } from 'react';
import { CustomerServiceOutlined, QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import {
  Alert,
  Carousel,
  DatePicker,
  Flex,
  FloatButton,
  Modal,
  Progress,
  Tag,
  Tour,
  Typography,
} from 'antd';
import { createStyles, css } from 'antd-style';
import classNames from 'classnames';
import dayjs from 'dayjs';

import useDark from '../../../hooks/useDark';
import SiteContext from '../../../theme/slots/SiteContext';
import { getCarouselStyle } from './util';

const { _InternalPanelDoNotUseOrYouWillBeFired: ModalDoNotUseOrYouWillBeFired } = Modal;
const { _InternalPanelDoNotUseOrYouWillBeFired: DatePickerDoNotUseOrYouWillBeFired } = DatePicker;
const { _InternalPanelDoNotUseOrYouWillBeFired: TourDoNotUseOrYouWillBeFired } = Tour;
const { _InternalPanelDoNotUseOrYouWillBeFired: FloatButtonDoNotUseOrYouWillBeFired } = FloatButton;

const locale = {
  yesterday: '어제',
  lastWeek: '지난 주',
  lastMonth: '지난 달',
  lastYear: '작년',
  new: '신규',
  update: '업데이트',
  sampleContent:
    'Ant Design 5.0은 동적 및 혼합 테마 기능을 제공하기 위해 CSS-in-JS 기술을 사용합니다. 동시에, 우리는 컴포넌트 수준의 CSS-in-JS 솔루션을 사용하여 애플리케이션의 성능을 향상시킵니다.',
  inProgress: '진행 중',
  success: '성공',
  taskFailed: '작업 실패',
  tour: '새로운 사용자에게 앱 사용 방법에 대한 빠른 안내',
};

const useStyle = () => {
  const isRootDark = useDark();

  return createStyles(({ token }) => {
    const { carousel } = getCarouselStyle();

    return {
      card: css`
        border-radius: ${token.borderRadius}px;
        border: 1px solid ${isRootDark ? token.colorBorder : 'transparent'};
        background: ${isRootDark ? token.colorBgContainer : '#f5f8ff'};
        padding: ${token.paddingXL}px;
        flex: none;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
          flex: none;
        }
      `,
      cardCircle: css`
        position: absolute;
        width: 120px;
        height: 120px;
        background: #1677ff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.1;
      `,
      mobileCard: css`
        height: 395px;
      `,
      nodeWrap: css`
        margin-top: ${token.paddingLG}px;
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      `,
      carousel,
      componentsList: css`
        width: 100%;
        overflow: hidden;
      `,
      mobileComponentsList: css`
        margin: 0 ${token.margin}px;
      `,
    };
  })();
};

const ComponentItem: React.FC<ComponentItemProps> = ({ title, node, type, index }) => {
  const tagColor = type === 'new' ? 'processing' : 'warning';
  const tagText = type === 'new' ? locale.new : locale.update;
  const { styles } = useStyle();
  const { isMobile } = useContext(SiteContext);
  return (
    <div className={classNames(styles.card, isMobile && styles.mobileCard)}>
      {/* Decorator */}
      <div
        className={styles.cardCircle}
        style={{ insetInlineEnd: (index % 2) * -20 - 20, bottom: (index % 3) * -40 - 20 }}
      />

      {/* Title */}
      <Flex align="center" gap="small">
        <Typography.Title level={4} style={{ fontWeight: 'normal', margin: 0 }}>
          {title}
        </Typography.Title>
        <Tag color={tagColor}>{tagText}</Tag>
      </Flex>
      <div className={styles.nodeWrap}>{node}</div>
    </div>
  );
};

interface ComponentItemProps {
  title: React.ReactNode;
  node: React.ReactNode;
  type: 'new' | 'update';
  index: number;
}

const ComponentsList: React.FC = () => {
  const { styles } = useStyle();
  const { isMobile } = useContext(SiteContext);
  const COMPONENTS = React.useMemo<Omit<ComponentItemProps, 'index'>[]>(
    () => [
      {
        title: 'Modal',
        type: 'update',
        node: (
          <ModalDoNotUseOrYouWillBeFired title="Ant Design 5.0" width={300}>
            {locale.sampleContent}
          </ModalDoNotUseOrYouWillBeFired>
        ),
      },

      {
        title: 'DatePicker',
        type: 'update',
        node: (
          <DatePickerDoNotUseOrYouWillBeFired
            value={dayjs('2022-11-18 14:00:00')}
            showToday={false}
            presets={
              isMobile
                ? []
                : [
                    { label: locale.yesterday, value: dayjs().add(-1, 'd') },
                    { label: locale.lastWeek, value: dayjs().add(-7, 'd') },
                    { label: locale.lastMonth, value: dayjs().add(-1, 'month') },
                    { label: locale.lastYear, value: dayjs().add(-1, 'year') },
                  ]
            }
          />
        ),
      },

      {
        title: 'Progress',
        type: 'update',
        node: (
          <Flex gap="small" vertical>
            <Flex gap="small" align="center">
              <Progress type="circle" trailColor="#e6f4ff" percent={60} size={14} />
              {locale.inProgress}
            </Flex>
            <Flex gap="small" align="center">
              <Progress type="circle" percent={100} size={14} />
              {locale.success}
            </Flex>
            <Flex gap="small" align="center">
              <Progress type="circle" status="exception" percent={88} size={14} />
              {locale.taskFailed}
            </Flex>
          </Flex>
        ),
      },
      {
        title: 'Tour',
        type: 'new',
        node: (
          <TourDoNotUseOrYouWillBeFired
            title="Ant Design 5.0"
            description={locale.tour}
            style={{ width: isMobile ? 'auto' : 350 }}
            current={3}
            total={9}
          />
        ),
      },
      {
        title: 'FloatButton',
        type: 'new',
        node: (
          <Flex align="center" gap="large">
            <FloatButtonDoNotUseOrYouWillBeFired
              shape="square"
              items={[
                { icon: <QuestionCircleOutlined /> },
                { icon: <CustomerServiceOutlined /> },
                { icon: <SyncOutlined /> },
              ]}
            />
            <FloatButtonDoNotUseOrYouWillBeFired backTop />
            <FloatButtonDoNotUseOrYouWillBeFired
              items={[
                { icon: <QuestionCircleOutlined /> },
                { icon: <CustomerServiceOutlined /> },
                { icon: <SyncOutlined /> },
              ]}
            />
          </Flex>
        ),
      },

      // {
      //   title: 'Steps',
      //   type: 'update',
      //   node: <Button style={{ width: PLACEHOLDER_WIDTH }}>Placeholder</Button>,
      // },

      {
        title: 'Alert',
        type: 'update',
        node: (
          <Alert
            style={{ width: 400 }}
            message="Ant Design 5.0"
            description={locale.sampleContent}
            closable
          />
        ),
      },
    ],
    [isMobile],
  );

  return isMobile ? (
    <div className={styles.mobileComponentsList}>
      <Carousel className={styles.carousel}>
        {COMPONENTS.map<React.ReactNode>(({ title, node, type }, index) => (
          <ComponentItem
            title={title}
            node={node}
            type={type}
            index={index}
            key={`mobile-item-${index}`}
          />
        ))}
      </Carousel>
    </div>
  ) : (
    <Flex justify="center" className={styles.componentsList}>
      <Flex align="stretch" gap="large">
        {COMPONENTS.map<React.ReactNode>(({ title, node, type }, index) => (
          <ComponentItem
            title={title}
            node={node}
            type={type}
            index={index}
            key={`desktop-item-${index}`}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ComponentsList;
