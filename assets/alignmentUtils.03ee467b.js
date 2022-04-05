var t,r;function n(e){switch(e){case"left":return t.Left;case"right":return t.Right;case"center":case"justify":return t.Center}}function a(e){switch(e){case"top":return r.Top;case"middle":return r.Center;case"baseline":return r.Baseline;case"bottom":return r.Bottom}}function c(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[t.Right,r.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[t.Center,r.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[t.Left,r.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[t.Right,r.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[t.Center,r.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[t.Left,r.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[t.Right,r.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[t.Center,r.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[t.Left,r.Top];default:return console.debug(`Found invalid placement type ${e}`),[t.Center,r.Center]}}function o(e){switch(e){case t.Right:return-1;case t.Center:return 0;case t.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function s(e){switch(e){case r.Top:return 1;case r.Center:return 0;case r.Bottom:case r.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function i(e){switch(e){case"left":return t.Left;case"right":return t.Right;case"center":case"justify":return t.Center}}function l(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}(function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"})(t||(t={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(r||(r={}));export{c as a,o as c,t as e,l as i,a as n,s as o,n as r,i as s,r as t};