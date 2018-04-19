import { isUrl } from '../utils/utils';

const menuData = [ 
  {
    name: '控制台',
    icon: 'dashboard',
    path: 'dashboard',
    children: [{
      name: '总览',
      path: 'analysis',
    },
    ],
  },
  {
  name: '系统设置',
  icon: 'user',
  path: 'syster',
  authority: 'admin',
  children: [{
    name: '用户管理',
    path: 'user',
    authority:'admin',
  }],
}
];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
