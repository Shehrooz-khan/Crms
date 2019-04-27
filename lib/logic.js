/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {criminalsystem.CriminalFreedom} criminialFreedom
 * @transaction
 */
async function criminalFreedom(tx) {
    // Save the old value of the asset.
    // const criminalAssetRegistry =await getAssetRegistry('criminalsystem.criminalStatus');
    let criminalsRegistry = await getParticipantRegistry('criminalsystem.Criminals');
    let MinistryPersonRegistry = await getParticipantRegistry('criminalsystem.MinistryPerson');
    // const oldValue = tx.asset.value;
    // const criminalIdAsset = await criminalAssetRegistry.get(tx.CriminalId);
    let MinistryPersonIdMinister = await MinistryPersonRegistry.get(tx.MinistryPersonId);
    let criminalIdcriminal = await criminalsRegistry.get(tx.CriminalId);
    // Update the asset with the new value.
    // tx.asset.value = tx.newValue;
    // // Get the asset registry for the asset.
    // const assetRegistry = await getAssetRegistry('crimnalsystem.SampleAsset');
    // // Update the asset in the asset registry.
    // await assetRegistry.update(tx.asset);
    // Emit an event for the modified asset.
    // let event = getFactory().newEvent('crimnalsystem', 'criminalAssetEvent');
    //tx.asset.Owner===criminialIdcriminal &&tx.asset.tempAssetHolder===MinistryPersonIdMinister
    try{
        if(criminalIdcriminal.sentenceStatus && criminalIdcriminal.Ministry==tx.MinistryCategory && MinisterPersonIdMinister.MinistryCategory==tx.MinistryCategory)   {
        criminalIdcriminal.sentenceStatus=false;
        await  criminalsRegistry.update(criminalIdcriminal);
        }
    }catch(error)   {
        console.error(error);
    }
}