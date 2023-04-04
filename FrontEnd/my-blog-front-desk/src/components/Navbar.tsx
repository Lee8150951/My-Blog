import React, { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Nav, Button, Dropdown, Input } from '@douyinfe/semi-ui';
import { IconMoon, IconSearch, IconAppCenter, IconCamera, IconSend, IconMember, IconSun } from '@douyinfe/semi-icons';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { navbarInfoQuery } from '../api';
import '../styles/components/Navbar.scss';

interface Props {
  children?: React.ReactNode;
  // 组件props类型
  client: ApolloClient<NormalizedCacheObject>;
}

const Navbar: React.FC<Props> = (props): JSX.Element => {
  const { client } = props;
  const navigate = useNavigate(),
    location = useLocation(),
    [usp] = useSearchParams();
  console.log(usp)

  /** state部分 **/
  let [navbarInfo, setNavbarInfo] = useState({
    logo: '',
    title: '',
    theme: false,
    search: false,
    life: false,
    classify: false,
    board: false,
    personal: false,
  });
  let [theme, setTheme] = useState(true);

  /** effect部分 **/
  useEffect(() => {
    (async () => {
      try {
        let { data: { navbar } } = await navbarInfoQuery(client);
        setNavbarInfo(navbar)
      } catch (_) {}
    })();
  }, []);

  /** methods部分 **/
  const themeHandle = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      setTheme(true);
    } else {
      body.setAttribute('theme-mode', 'dark');
      setTheme(false);
    }
  };
  const lifeHandle = () => {
    navigate('/life');
  };
  const boardHandle = () => {
    navigate('/board');
  };
  const personalHandle = () => {
    navigate('/personal');
  };

  /** render **/
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        onSelect={key => console.log(key)}
        header={{
          text: `${navbarInfo.title}`,
        }}
        footer={
          <>
            <div className={navbarInfo.theme ? "" : "hide"}>
              {
                theme ? <Button onClick={themeHandle} theme="borderless" type="tertiary" icon={<IconMoon size={"large"}/>} aria-label="主题"/> :
                  <Button onClick={themeHandle} theme="borderless" type="tertiary" icon={<IconSun size={"large"}/>} aria-label="主题"/>
              }
            </div>
            <div className={navbarInfo.search ? "" : "hide"}>
              <Input prefix={<IconSearch />} showClear></Input>
            </div>
            <div className={navbarInfo.classify ? "" : "hide"}>
              <Dropdown
                render={
                  <Dropdown.Menu>
                    <Dropdown.Item>Menu Item 1</Dropdown.Item>
                    <Dropdown.Item>Menu Item 2</Dropdown.Item>
                    <Dropdown.Item>Menu Item 3</Dropdown.Item>
                  </Dropdown.Menu>
                }
              >
                <Button icon={<IconAppCenter />} theme="borderless" type="tertiary" style={{ marginRight: 10 }}>分类</Button>
              </Dropdown>
            </div>
            <div className={navbarInfo.life ? "" : "hide"}>
              <Button onClick={lifeHandle} icon={<IconCamera />} theme="borderless" type="tertiary" style={{ marginRight: 10 }}>日常</Button>
            </div>
            <div className={navbarInfo.board ? "" : "hide"}>
              <Button onClick={boardHandle} icon={<IconSend />} theme="borderless" type="tertiary" style={{ marginRight: 10 }}>留言</Button>
            </div>
            <div className={navbarInfo.personal ? "" : "hide"}>
              <Button onClick={personalHandle} icon={<IconMember />} theme="borderless" type="tertiary" style={{ marginRight: 10 }}>关于</Button>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Navbar;