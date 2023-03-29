<script lang="ts">

export default {
    data() {
        return {
        }
    },
    props: {
        thieleSmall: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
<v-table v-if="thieleSmall" density="compact" class="mx-auto px-5" style="max-width: 100%;">
<thead>
    <tr>
        <th class="text-left">
            T&S params
        </th>
        <th class="text-left">
            T&S values
        </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Resonant frequency fS</td>
        <td>{{thieleSmall.resonant_frequency}} Hz</td>
    </tr>
    <tr>
        <td>Electrical Q QES</td>
        <td>{{ thieleSmall.qes }}</td>
    </tr>
    <tr>
        <td>Mechanical Q QMS</td>
        <td>{{ thieleSmall.qms }}</td>
    </tr>
    <tr>
        <td>Total Q factor QTS</td>
        <td>{{ thieleSmall.qts }}</td>
    </tr>
    <tr>
        <td>Suspension equivalent air volume VAS</td>
        <td>{{ thieleSmall.vas }} L</td>
    </tr>
    <tr>
        <td>DC resistance RE</td>
        <td>{{ thieleSmall.re }} Ω</td>
    </tr>
    <tr>
        <td>Minimum impedance Zmin</td>
        <td>{{ thieleSmall.zmin }} Ω</td>
    </tr>
    <tr>
        <td>Voice coil inductance LE</td>
        <td>{{ thieleSmall.le }} mH</td>
    </tr>
    <tr>
        <td>Force factor B·l</td>
        <td>{{ thieleSmall.force_factor }} T·m</td>
    </tr>
    <tr>
        <td>Suspension mechanical resistance RMS</td>
        <td>{{ thieleSmall.rms }} N·s/m</td>
    </tr>
    <tr>
        <td>Suspension mechanical compliance CMS</td>
        <td>{{ thieleSmall.cms }} µm/N</td>
    </tr>
    <tr>
        <td>Moving mass MMD</td>
        <td>{{ thieleSmall.mmd }} g</td>
    </tr>
    <tr>
        <td>Moving mass (including airload) MMS</td>
        <td>{{ thieleSmall.mms }} g</td>
    </tr>
    <tr>
        <td>Surface of the diaphragm SD</td>
        <td>{{ thieleSmall.sd }} cm²</td>
    </tr>
    <tr>
        <td>Effective diaphragm diameter Ø</td>
        <td>{{ thieleSmall.edd }} cm</td>
    </tr>
    <tr>
        <td>Maximum linear excursion Xmax</td>
        <td>± {{ thieleSmall.xmax }} mm</td>
    </tr>
    <tr>
        <td>Excursion limit Xlim</td>
        <td>± {{ thieleSmall.xlim }} mm</td>
    </tr>
    <tr>
        <td>Displacement volume at Xmax VD</td>
        <td>{{ thieleSmall.xmaxvd }} cm³</td>
    </tr>
    <tr>
        <td>Efficiency η₀</td>
        <td>{{ thieleSmall.efficiency }} %</td>
    </tr>
    <tr>
        <td>Efficiency bandwidth product EBP</td>
        <td>{{ thieleSmall.ebp }}</td>
    </tr>

</tbody>
</v-table>
</template>
