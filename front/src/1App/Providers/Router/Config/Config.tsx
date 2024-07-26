import React from "react";
import {RouteProps} from "react-router-dom"
import {Main} from "../../../../2Pages/Main";
import {Courses} from "../../../../2Pages/Courses";
import {Teacher} from "../../../../2Pages/Teacher";
import {News} from "../../../../2Pages/News";

enum AppRoutes {
    MAIN = "main",
    COURSES = "courses",
    TEACHER = "teacher",
    NEWS = "news",

    NOT_FOUND = "not_found",
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "",
    [AppRoutes.COURSES]: "/courses/:id",
    [AppRoutes.TEACHER]: "/teacher/:id",
    [AppRoutes.NEWS]: "/reviews",
    //last
    [AppRoutes.NOT_FOUND]: "*"
};


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main/>
    },[AppRoutes.COURSES]: {
        path: RoutePaths.courses,
        element: <Courses/>
    },[AppRoutes.TEACHER]: {
        path: RoutePaths.teacher,
        element: <Teacher/>
    },[AppRoutes.NEWS]: {
        path: RoutePaths.news,
        element: <News/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <div>Not Found</div>
    }
};