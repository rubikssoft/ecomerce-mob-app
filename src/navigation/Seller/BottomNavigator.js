import {
    createBottomTabNavigator
} from "react-navigation";

import OrderStack from './OrderStack';
import ProductStack from './ProductStack';
import theme from 'src/style/theme/default'
export default createBottomTabNavigator(
    {
        OrderStack,
        ProductStack,
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
