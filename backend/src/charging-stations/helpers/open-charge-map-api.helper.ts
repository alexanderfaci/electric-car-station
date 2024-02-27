import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ChargingUnitDto } from 'src/common/dtos/charging-unit.dto';
import { DistanceHelper } from 'src/common/helpers/distance.helper';

@Injectable()
export class OpenChargeMapApiHelper {
  constructor(private httpService: HttpService) {}

  async getChargingStations(latitude: number, longitude: number,amount:number): Promise<ChargingUnitDto[]> {
    const apiKey = process.env.OPEN_CHARGE_MAP_API_KEY
    const url = `https://api.openchargemap.io/v3/poi?key=${apiKey}&latitude=${latitude}&longitude=${longitude}&maxresults=${amount}`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const stations = response.data.map(station => ({
        id: station.ID.toString(),
        name: station.AddressInfo.Title,
        latitude: station.AddressInfo.Latitude,
        longitude: station.AddressInfo.Longitude,
        distance: DistanceHelper.calculateDistance(
          { latitude: station.AddressInfo.Latitude, longitude: station.AddressInfo.Longitude },
          { latitude, longitude }
        )
      }));
      //api already returns distance, but we prefer to calculate with the same method

      return stations.slice(0, amount); // Ensure we only return the requested amount
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch charging stations');
    }
  }
}