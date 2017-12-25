import 'normalize.css';
import '../../static/styles/main.scss';
import '../../static/styles/base.scss';
import './about.scss';
// components
import '../../components/socials/socials.scss';
import '../../components/header/header.scss';
import '../../components/footer/footer.scss';
import '../../components/nav_list/nav_list.scss';
import '../../components/user/user.scss';
import '../../components/circles/circles.scss';
import '../../components/triangles/triangles.scss';
import '../../components/burger_menu/burger_menu.scss';
// component scripts
import burger from '../../components/burger_menu/burger_menu.js';
// media
import '../../static/styles/layout/settingsMedia.scss';
import '../../static/styles/baseMedia.scss';

import Map from '../../scripts/map';

Map.makeMap();
burger.init();
