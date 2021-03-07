<template>
    <div style="background: #212121; margin: 20px">
<!--        <div style="text-align: left" v-if="$route.params.lang === 'ru'">-->
            <!-- admitad.banner: mrycz0d72m50754f973b3b993522d4 Dok.UA -->
<!--            <a target="_blank" rel="nofollow"-->
<!--               href="https://ad.admitad.com/g/mrycz0d72m50754f973b3b993522d4/?i=4">-->
<!--                <img alt="Dok.UA" src="https://ad.admitad.com/b/mrycz0d72m50754f973b3b993522d4/"/>-->
<!--            </a>-->
            <!-- /admitad.banner -->
<!--        </div>-->
        <br>
        <div>
            <div style="text-align: center">
                <p>{{$t('bearingsAndSeals')}}</p>
                <p>{{$t('simplifiedTables')}}</p>
                <br>
            </div>
            <details open>
                <summary>
                    {{$t('ural') + " 650"}}
                </summary>
                <table>
                    <tbody>
                    <tr>
                        <td>{{$t('location')}}</td>
                        <td>{{$t('bearing')}}</td>
                        <td>{{$t('seal')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('crankshaft')}}</td>
                        <td>6207 (2)</td>
                        <td>50x70 Corteco 12011238B</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('camshaft')}}</td>
                        <td>6205</td>
                        <td>16x30 Corteco 19026201B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('mainShaft')}}</td>
                        <td>6304 (2)</td>
                        <td>35x48 Payen NC006</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchShaft')}}</td>
                        <td>6205, NJ204</td>
                        <td>32x45 Payen NJ416</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('kickstarterShaft')}}</td>
                        <td>-</td>
                        <td>20x40 Corteco 12011118B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchReleaseRod')}}</td>
                        <td>{{"AXK0619 " + $t('withWashers')}}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('gearshiftLever')}}</td>
                        <td>-</td>
                        <td>12x25 Corteco 19034788B</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('casing')}}</td>
                        <td>6207</td>
                        <td>45x59 Corteco 19016629B</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('drivePinion')}}</td>
                        <td>3304, 874901</td>
                        <td>33x49 Corteco 19036249B</td>
                    </tr>
                    <tr>
                        <td>{{$t('wheel')}}</td>
                        <td>30204 (2)</td>
                        <td>24x38 Corteco 19017089</td>
                    </tr>
                    <tr>
                        <td>{{$t('steeringHead')}}</td>
                        <td>SSW055 (2)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('generator')}}</td>
                        <td>62203 (2)</td>
                        <td>22x40 Corteco 12011120B</td>
                    </tr>
                    </tbody>
                </table>
            </details>
            <details>
                <summary>
                    {{$t('dnepr')}}
                </summary>
                <table>
                    <tbody>
                    <tr>
                        <td>{{$t('location')}}</td>
                        <td>{{$t('bearing')}}</td>
                        <td>{{$t('seal')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('crankshaft')}}</td>
                        <td>6209, NJ209</td>
                        <td>60x85 Corteco 12015893B</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('camshaft')}}</td>
                        <td>6205, 6204</td>
                        <td>16x30 Corteco 19026201B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('mainShaft')}}</td>
                        <td>6304 (2)</td>
                        <td>35x48 Payen NC006</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchShaft')}}</td>
                        <td>6205, 6303</td>
                        <td>32x45 Payen NJ416</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('kickstarterShaft')}}</td>
                        <td>-</td>
                        <td>20x34 Corteco 19026213B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchReleaseRod')}}</td>
                        <td>{{"AXK0619 " + $t('withWashers')}}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('gearshiftLever')}}</td>
                        <td>-</td>
                        <td>16x30 Corteco 19026201B</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('casing')}}</td>
                        <td>6207</td>
                        <td>45x59 Corteco 19016629B</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('drivePinion')}}</td>
                        <td>3304, 874901</td>
                        <td>33x49 Corteco 19036249B</td>
                    </tr>
                    <tr>
                        <td>{{$t('wheel')}}</td>
                        <td>30204 (2)</td>
                        <td>24x38 Corteco 19017089</td>
                    </tr>
                    <tr>
                        <td>{{$t('steeringHead')}}</td>
                        <td>SSW055 (2)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('generator')}}</td>
                        <td>62203 (2)</td>
                        <td>22x40 Corteco 12011120B</td>
                    </tr>
                    </tbody>
                </table>
            </details>
            <details>
                <summary>
                    {{$t('k750')}}
                </summary>
                <table>
                    <tbody>
                    <tr>
                        <td>{{$t('location')}}</td>
                        <td>{{$t('bearing')}}</td>
                        <td>{{$t('seal')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('crankshaft')}}</td>
                        <td>6207 (2)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('engine') + ", " + $t('camshaft')}}</td>
                        <td>6205</td>
                        <td>16x30 Corteco 19026201B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('mainShaft')}}</td>
                        <td>6304 (2)</td>
                        <td>35x48 Payen NC006</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchShaft')}}</td>
                        <td>6205, NJ204</td>
                        <td>32x45 Payen NJ416</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('kickstarterShaft')}}</td>
                        <td>-</td>
                        <td>20x34 Corteco 19026213B</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('clutchReleaseRod')}}</td>
                        <td>{{"AXK0619 " + $t('withWashers')}}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('gearbox') + ", " + $t('gearshiftLever')}}</td>
                        <td>-</td>
                        <td>12x25 Corteco 19034788B (2)</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('casing')}}</td>
                        <td>6207</td>
                        <td>45x59 Corteco 19016629B</td>
                    </tr>
                    <tr>
                        <td>{{$t('finalDrive') + ", " + $t('drivePinion')}}</td>
                        <td>3304, 874901</td>
                        <td>33x49 Corteco 19036249B</td>
                    </tr>
                    <tr>
                        <td>{{$t('wheel')}}</td>
                        <td>30204 (2)</td>
                        <td>24x38 Corteco 19017089</td>
                    </tr>
                    <tr>
                        <td>{{$t('steeringHead')}}</td>
                        <td>SSW055 (2)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{{$t('generator')}}</td>
                        <td>6200, 6201</td>
                        <td>18x35 Corteco 12010819B
                        </td>
                    </tr>
                    </tbody>
                </table>
            </details>
            <div style="text-align: center">
                <br>
                <p>{{$t('detailedInfoInTheApp')}}</p>
            </div>
        </div>
        <br>
        <br>
        <br>
        <DonationSection/>
        <br>
        <br>
    </div>
</template>

<script>
import DonationSection from "@/components/DonationSection";
export default {
    name: "BearingSealTable",
    components: {DonationSection}
}
</script>

<style scoped>
table, summary {
    text-align: left;
}

table {
    border-spacing: 6px;
    border-collapse: separate;
}

td {
    /*border-left: 1px solid;*/
    border-right: 1px solid;
    padding-right: 8px;
}

details {
    display: inline-block;
    margin: 10px;
}

summary {
    font-weight: bold;
}

.table-header {
    font-weight: bold;
}
</style>