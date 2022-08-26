import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {Routes, Route, Navigate,} from 'react-router-dom';

const LinearIndeterminate = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <LinearProgress/>
        </Box>
    );
}


const SignInComponent = React.lazy(() => import('./views/SignIn'));
const SignUpComponent = React.lazy(() => import('./views/SingUp'));
const DashboardComponent = React.lazy(() => import('./layout/dashboard'));
const NotFoundComponent = React.lazy(() => import('./views/NotFound'));
const OrdersComponent = React.lazy(() => import('./views/Orders'));
const HospitalComponent = React.lazy(() => import('./views/Hospital'));
const StaffListComponent = React.lazy(() => import('./views/Staff/StaffListComponent'));
const StaffCreate  = React.lazy(() => import('./views/Staff/StaffCreate'));

const MainRoutes = () => {
    return (
        <React.Suspense fallback={<LinearIndeterminate/>}>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/sign-in" replace/>}
                />
                <Route
                    path='/sign-in'
                    element={<SignInComponent/>}
                >
                </Route>
                <Route
                    path='/sign-up'
                    element={<SignUpComponent/>}
                >
                </Route>
                <Route
                    path='/dashboard'
                    element={<DashboardComponent/>}
                >
                    <Route
                        path='order'
                        element={<OrdersComponent/>}
                    >
                    </Route>
                    <Route
                        path='hospital'
                        element={<HospitalComponent/>}
                    >
                    </Route>
                    <Route
                        path='staff-list'
                        element={<StaffListComponent/>}
                    >
                    </Route>
                    <Route
                        path='staff'
                        element={<StaffCreate/>}
                    >
                    </Route>
                </Route>
                <Route
                    path='/not-found'
                    element={<NotFoundComponent/>}
                />
                <Route
                    path="*"
                    element={<Navigate to="/not-found" replace/>}
                />

            </Routes>
        </React.Suspense>
    );
}

export default MainRoutes;