import {
    createBottomTabNavigator
} from "react-navigation";

import CommonStack from './CommonStack';
import OrderStack from './OrderStack';
import theme from 'src/style/theme/default'
export default createBottomTabNavigator(
    {
        CommonStack,
        OrderStack,
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: theme.footerbg,
                textAlign: 'center'
            }
        }
    }
);
